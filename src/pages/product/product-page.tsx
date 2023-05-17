import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from '../../hooks/store-hooks'

import { TProduct, TProductVariant } from '../../utils/types'

import styles from './product.module.css'
import plug from '../../images/no-photo.png'
import { Loader } from '../../components/ui/loader'
import { Modal } from '../../components/modal/modal'
import { Form, TFormValues } from '../../components/forms/form'
import { ApplicationSent } from '../../components/ui/application-sent'
import { sendTgMessage } from '../../utils/send-tg-message'
import { SmtWentWrong } from '../../components/ui/smt-went-wrong'
import { PriceCartBlock } from './price-cart-block'
import { VariantsBlock } from './variants-block'

export const ProductPage = () => {
  const { isProductsRequest, products } = useSelector(store => store.products)

  const { id } = useParams<{ id?: string }>();
  const currentProduct = products.find((product: TProduct) => product.id === Number(id))

  const [ count, setCount ] = useState(1);
  const [ isModal, setIsModal ] = useState(false)
  const [ isSentModal, setIsSentModal ] = useState(false)
  const [ isNotSentModal, setIsNotSentModal ] = useState(false)
  const [ selectedVariant, setSelectedVariant ] = useState<TProductVariant>()

  const [ productImage, setProductImage ] = useState(plug);

  useEffect(() => {
    if (currentProduct && currentProduct.variants) setSelectedVariant(currentProduct.variants[0])
  }, [currentProduct])

  useEffect(() => {
    if (currentProduct) {
    const images = currentProduct.variants.map(variant => variant.image).filter(image => image !== null);
    if (images.length) {
      setProductImage(`${process.env.REACT_APP_BACKEND_URL}${images[0]}`)
    }
  }
  }, [currentProduct])

  const submitOrder = async (data: TFormValues) => {
    if (currentProduct) {
      let message = `<strong>Новый заказ (со страницы товара)</strong>\n\nИмя: ${data.name}\nНомер телефона: ${data.phone}\n`;
      if (data.address) message += `\nАдрес доставки: ${data.address}`
      if (data.comment) message += `\nКомментарий: ${data.comment}`
      message += `\n\nЗаказ: ${currentProduct.title} (артикул: ${currentProduct.id}),\nколичество: ${count}`
      if (selectedVariant) message += `\nВариант товара: ${selectedVariant.title} (стоимость: ${selectedVariant.price}р)`

      sendTgMessage(message)
      .then(() => {
        setIsModal(false)
        setIsSentModal(true)
      })
      .catch(() => {
        setIsModal(false)
        setIsNotSentModal(true)
      })
    }
  }

  return (
    <>
      <div className={`container ${styles.container}`}>
        {
          isProductsRequest ? (<Loader />) : 
          currentProduct ?
            (
              <>
                { productImage !== plug && 
                  <img
                    className={styles.image}
                    src={selectedVariant?.image ? `${process.env.REACT_APP_BACKEND_URL}${selectedVariant.image}` : productImage}
                    alt=""
                  />
                }
                <div className={styles.wrapper}>
                  <div className={styles.description}>
                    <h2 className={styles.h2}>{currentProduct.title}</h2>
                    <p className={styles.id}>Артикул: {selectedVariant?.article}</p>
                    <div className={styles.characteristics}>
                      {
                        currentProduct.variants && (
                          <VariantsBlock
                            variants={currentProduct.variants}
                            selectedVariant={selectedVariant}
                            setSelectedVariant={setSelectedVariant}
                          />
                        )
                      }
                      {/* <CharacteristicsBlock currentProduct={currentProduct} /> */}       
                      <p>Описание</p>
                      {selectedVariant?.description ? selectedVariant.description : 'У данного товара нет описания'}
                    </div>
                  </div>

                  <PriceCartBlock
                    currentProduct={currentProduct}
                    selectedVariant={selectedVariant}
                    count={count}
                    setCount={setCount}
                    setIsModal={setIsModal}
                  />
                </div>
              </>
            ) : (
              <div>
                <h2>Вы попали на страницу не существующего товара</h2>
                <p>Проверьте корректность ссылки или загляните <Link to='/catalog'>в каталог</Link></p>
              </div>
            )
        }
      </div>
      { isModal && <Modal onClose={() => setIsModal(false)}><Form size='small' onSubmit={submitOrder}/></Modal> }
      { isSentModal && <Modal onClose={() => setIsSentModal(false)}><ApplicationSent /></Modal> }
      { isNotSentModal && <Modal onClose={() => setIsNotSentModal(false)}><SmtWentWrong /></Modal> }
    </>
  )
}

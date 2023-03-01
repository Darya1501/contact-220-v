import React from 'react'
import { Loader } from '../../components/ui/loader';
import { SmtWentWrong } from '../../components/ui/smt-went-wrong';
import { useSelector } from '../../hooks/store-hooks';
import { TService, TServiceCategory } from '../../utils/types';
import styles from './services.module.css'

export const ServicesPage = () => {
  const { isServicesRequest, isServicesSuccess, isServicesFailed, services } = useSelector(state => state.services);

  return (
    <div className={`container ${styles.container}`}>
      <h2>Цены на электромонтажные работы в Новороссийске</h2>

      {
        isServicesRequest ? (<Loader />) :
        isServicesFailed ? (<SmtWentWrong />) :
        isServicesSuccess ?
        (services.length ? (
          <>
            <table>
              <thead>
                <tr>
                  <td className={styles.name}><strong>Наименование работ</strong></td>
                  <td><strong>Ед. изм.</strong></td>
                  <td><strong>Цена, (руб.)</strong></td>
                </tr>
              </thead>
              <tbody>
                {
                  services.map(
                    (category: TServiceCategory) => (
                      <>
                        <tr key={category.category}>
                          <td colSpan={3} className={styles.ctegory}>{category.category}</td>
                        </tr>
                        {
                          category.items.map(
                            (service: TService) => (
                              <tr key={service.title}>
                                <td className={styles.name}>{service.title}</td>
                                <td>{service.unit}</td>
                                <td>{service.price} ₽</td>
                              </tr>
                            )
                          )
                        }
                      </>
                    )
                  )
                }
              </tbody>
            </table>
          </>
        ) : (<h2>В магазине пока нет товаров. Загляните к нам позже</h2>)) : null
      }
    </div>
  )
}

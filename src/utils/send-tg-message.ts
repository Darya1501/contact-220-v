export const sendTgMessage = async (message: string) => {
  const url_api = `https://api.telegram.org/bot${ process.env.REACT_APP_TELEGRAM_TOKEN }/sendMessage`

  return fetch(url_api, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'User-Agent': 'Telegram Bot SDK - (https://github.com/irazasyed/telegram-bot-sdk)',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: process.env.REACT_APP_TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML'
    })
  })
}  
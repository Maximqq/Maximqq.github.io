import asyncio
from aiogram import Bot, Dispatcher, executor, types
from config import BOT_TOKEN
import logging

logging.basicConfig(format=u'%(filename)+13s [ LINE:%(lineno)-4s] %(levelname)-8s [%(asctime)s] %(message)s',
                    level=logging.INFO)


loop = asyncio.new_event_loop()
bot = Bot(BOT_TOKEN, parse_mode='HTML')
dp = Dispatcher(bot, loop)

if __name__ == '__main__':
    from handlers import dp
    executor.start_polling(dp)

from aiogram import types, Bot, Dispatcher
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton, PreCheckoutQuery, ContentType, Message
from config import PAYMENTS_TOKEN
from main import dp, bot
from keyboards import keyboard



@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    await bot.send_message(message.chat.id,
                            'Тестируем WebApp',
                            reply_markup=keyboard)


PRICE = {
    '1': [types.LabeledPrice(label='Item1', amount = 1000000)],
    '2': [types.LabeledPrice(label='Item2', amount = 2000000)],
    '3': [types.LabeledPrice(label='Item3', amount = 3000000)],
    '4': [types.LabeledPrice(label='Item4', amount = 4000000)],
    '5': [types.LabeledPrice(label='Item5', amount = 5000000)],
    '6': [types.LabeledPrice(label='Item6', amount = 6000000)],
}


@dp.message_handler(content_types='web_app_data')
async def start(web_app_message):
    await bot.send_invoice(web_app_message.chat.id,
                            title = 'Title',
                            desctiption = "Title",
                            provider_token = PAYMENTS_TOKEN,
                            currency = 'rub',
                            need_email = True,
                            need_phone_number = True,
                            prices = PRICE[f'{web_app_message.web_app_data.data}'],
                            strart_parameter = "example",
                            payload = 'some_invoice')

@dp.pre_checkout_query_handler(lambda q: True)
async def checkout_process(pre_checkout_query: PreCheckoutQuery):
    await bot.answer_pre_checkout_query(pre_checkout_query.id, ok=True)

@dp.message_handler(content_types = ContentType.SUCCESSFUL_PAYMENT)
async def successful_payment(message: types.Message):
    await bot.send_message(message.chat.id,
                            "Платеж совершен успешно")

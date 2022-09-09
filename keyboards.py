import imp
from aiogram import types
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton, ReplyKeyboardMarkup, KeyboardButton
from aiogram.types.web_app_info import WebAppInfo
from aiogram.utils.callback_data import CallbackData


web_app = WebAppInfo(url = "https://maximqq.github.io/")

keyboard = ReplyKeyboardMarkup(
    keyboard = [
        [KeyboardButton(text="Сайт", web_app = web_app)]
    ],
    resize_keyboard = True
)

cb = CallbackData('btn', 'action')
key = InlineKeyboardMarkup(
    inline_keyboard = [[InlineKeyboardButton("Pay", callback_data = 'btn:buy')]]
)
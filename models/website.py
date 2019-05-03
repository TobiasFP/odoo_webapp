# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

import logging

from odoo import api, fields, models, tools
from odoo.http import request
from odoo.addons.website_sale.models.website import Website

_logger = logging.getLogger(__name__)


class WebsiteExtended(Website):
    pass

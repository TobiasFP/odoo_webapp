# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from werkzeug.exceptions import Forbidden, NotFound

from odoo import http, tools, _
from odoo.addons.website_sale.controllers.main import WebsiteSale, TableCompute
from odoo.http import request
from odoo.http import route
from odoo.addons.base.ir.ir_qweb.fields import nl2br
from odoo.addons.http_routing.models.ir_http import slug
from odoo.addons.website.controllers.main import QueryURL
from odoo.exceptions import ValidationError
from odoo.addons.website.controllers.main import Website
from odoo.addons.website_form.controllers.main import WebsiteForm
from odoo.osv import expression
import odoo.addons.web.controllers.main as main

#Toby imports
import pprint
import json
import logging


_logger = logging.getLogger(__name__)


#Note from tobias@kluboplevelser.dk: Most of below WEbsite is just extending the website class, and doing in_place substitutions
class WebsiteSaleExtended(WebsiteSale):
    pass
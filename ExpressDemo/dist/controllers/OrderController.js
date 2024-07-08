"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrders = void 0;
const OrderService_1 = require("../services/OrderService");
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('orderList.html', { orders: yield (0, OrderService_1.getOrders)() });
});
exports.getAllOrders = getAllOrders;
//# sourceMappingURL=OrderController.js.map
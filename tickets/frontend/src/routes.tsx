import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importando todas as páginas que você já criou
import CreateEvent from "./pages/CreateEvent";
import CreateSale from "./pages/CreateSale";
import ListSales from "./pages/ListSales";
import ListUsers from "./pages/ListUsers";
import UpdateSaleStatus from "./pages/UpdateSaleStatus";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rota padrão: Quando acessar localhost:5173, redireciona para a lista de vendas */}
                <Route path="/" element={<Navigate to="/vendas" replace />} />

                {/* Rotas para Eventos */}
                <Route path="/eventos/novo" element={<CreateEvent />} />

                {/* Rotas para Vendas */}
                <Route path="/vendas" element={<ListSales />} />
                <Route path="/vendas/nova" element={<CreateSale />} />

                {/* Rota dinâmica para atualizar status. O ":id" captura o ID da venda pela URL */}
                <Route path="/vendas/:id/status" element={<UpdateSaleStatus />} />

                {/* Rotas para Usuários */}
                <Route path="/usuarios" element={<ListUsers />} />
            </Routes>
        </BrowserRouter>
    );
}
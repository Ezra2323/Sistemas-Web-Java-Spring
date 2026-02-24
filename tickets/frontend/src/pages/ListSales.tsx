import { LayoutDashboard, TrendingUp, Ticket, Users } from "lucide-react";

export default function ListSales() {
    return (
        <div className="space-y-6">
            {/* Cabeçalho da Página */}
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                    <LayoutDashboard className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                    <h2 className="text-lg font-bold text-slate-800">Dashboard de Vendas</h2>
                    <p className="text-sm text-slate-500">Visão geral da Semana da Computação.</p>
                </div>
            </div>

            {/* Cards de Resumo */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-slate-500 mb-1">Total Arrecadado</p>
                            <h3 className="text-2xl font-bold text-slate-800">R$ 0,00</h3>
                        </div>
                        <div className="bg-green-100 p-2 rounded-lg text-green-600"><TrendingUp className="h-5 w-5" /></div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-slate-500 mb-1">Ingressos Vendidos</p>
                            <h3 className="text-2xl font-bold text-slate-800">0</h3>
                        </div>
                        <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Ticket className="h-5 w-5" /></div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-slate-500 mb-1">Participantes</p>
                            <h3 className="text-2xl font-bold text-slate-800">0</h3>
                        </div>
                        <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Users className="h-5 w-5" /></div>
                    </div>
                </div>
            </div>

            {/* Tabela Vazia Preparada para o Gateway */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mt-8">
                <div className="px-8 py-5 border-b border-slate-100 bg-slate-50/50">
                    <h3 className="font-semibold text-slate-800">Vendas Recentes</h3>
                </div>
                <div className="p-12 text-center text-slate-500 text-sm">
                    Nenhuma venda registrada ainda. Conecte ao backend para ver os dados.
                </div>
            </div>
        </div>
    );
}
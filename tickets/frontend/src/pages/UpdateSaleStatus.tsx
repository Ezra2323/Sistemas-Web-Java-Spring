import { useEffect, useState, type FormEvent } from "react";
import { PencilLine, RefreshCw } from "lucide-react"; // Ícones para o design
import api from "../services/api";

// 1. Interface mantida para tipagem correta
interface Sale {
    id: string;
    userId: string;
    saleStatus: string;
    user?: { name: string };
    eventId?: { description: string };
}

function UpdateSaleStatus() {
    const [sales, setSales] = useState<Sale[]>([]);
    const [selectedSaleId, setSelectedSaleId] = useState("");
    const [newStatus, setNewStatus] = useState("PAGO");
    const [loading, setLoading] = useState(false); // Estado para feedback visual no botão

    const loadSales = async () => {
        try {
            const response = await api.get<Sale[]>("/sales");
            setSales(response.data);
        } catch (err) {
            console.error("Erro ao carregar vendas", err);
        }
    };

    useEffect(() => {
        loadSales();
    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            id: selectedSaleId,
            saleStatus: newStatus,
        };

        try {
            await api.put("/sales/saleStatus", payload);
            alert("Status da venda atualizado com sucesso!");
            loadSales();
        } catch (err) {
            console.error("Erro ao atualizar venda", err);
            alert("Erro ao atualizar venda");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Cabeçalho do Card - Padronizado com CreateEvent */}
            <div className="px-8 py-6 border-b border-slate-100 bg-slate-50/50 flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                    <PencilLine className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                    <h2 className="text-lg font-bold text-slate-800">Atualizar Status de Venda</h2>
                    <p className="text-sm text-slate-500">Modifique o estado financeiro de um pedido existente.</p>
                </div>
            </div>

            {/* Corpo do Formulário */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Seleção da Venda */}
                    <div className="col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Selecione a Venda</label>
                        <select
                            value={selectedSaleId}
                            onChange={(e) => setSelectedSaleId(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-slate-700 bg-white"
                        >
                            <option value="">Clique para buscar uma venda...</option>
                            {sales.map((sale) => (
                                <option key={sale.id} value={sale.id}>
                                    Pedido #{sale.id.substring(0, 8)}... — {sale.user?.name || `Usuário: ${sale.userId}`} — Status Atual: {sale.saleStatus}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Novo Status */}
                    <div className="col-span-2 md:col-span-1">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Novo Status</label>
                        <select
                            value={newStatus}
                            onChange={(e) => setNewStatus(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-slate-700 bg-white font-medium"
                        >
                            <option value="EM_ABERTO">🕒 Em Aberto</option>
                            <option value="PAGO">✅ Pago</option>
                            <option value="CANCELADO">❌ Cancelado</option>
                            <option value="ESTORNADO">🔄 Estornado</option>
                        </select>
                    </div>

                    {/* Informativo Visual Sutil */}
                    <div className="col-span-2 md:col-span-1 bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start gap-3">
                        <div className="text-blue-600 mt-0.5"><RefreshCw className="h-4 w-4" /></div>
                        <p className="text-xs text-blue-700 leading-relaxed">
                            A alteração de status é imediata. Certifique-se de que o pagamento foi confirmado antes de marcar como <strong>PAGO</strong>.
                        </p>
                    </div>
                </div>

                {/* Botões de Ação Padronizados */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex justify-end gap-3">
                    <button
                        type="button"
                        className="px-6 py-2.5 rounded-xl font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                        onClick={() => setSelectedSaleId("")}
                    >
                        Limpar
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`px-6 py-2.5 rounded-xl font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200 transition-all flex items-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Processando...' : 'Atualizar Pedido'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UpdateSaleStatus;
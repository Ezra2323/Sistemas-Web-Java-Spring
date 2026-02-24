import { useState } from "react";
import { Ticket } from "lucide-react";

export default function CreateSale() {
    const [eventoId, setEventoId] = useState("");
    const [usuarioId, setUsuarioId] = useState("");
    const [quantidade, setQuantidade] = useState("1");

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-100 bg-slate-50/50 flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                    <Ticket className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                    <h2 className="text-lg font-bold text-slate-800">Nova Venda</h2>
                    <p className="text-sm text-slate-500">Venda ingressos para os eventos ativos.</p>
                </div>
            </div>

            <form className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Evento</label>
                        <select
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600/20 outline-none text-slate-700 bg-white"
                            value={eventoId} onChange={(e) => setEventoId(e.target.value)}
                        >
                            <option value="" disabled>Selecione a atividade...</option>
                            <option value="1">Palestra: Inteligência Artificial (R$ 50,00)</option>
                            <option value="2">Minicurso: React (R$ 80,00)</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Usuário (Comprador)</label>
                        <select
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600/20 outline-none text-slate-700 bg-white"
                            value={usuarioId} onChange={(e) => setUsuarioId(e.target.value)}
                        >
                            <option value="" disabled>Selecione o inscrito...</option>
                            <option value="1">João Silva</option>
                            <option value="2">Juliana Costa</option>
                        </select>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Quantidade de Ingressos</label>
                        <input
                            type="number" min="1"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600/20 outline-none text-slate-700"
                            value={quantidade} onChange={(e) => setQuantidade(e.target.value)}
                        />
                    </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex justify-end gap-3">
                    <button type="button" className="px-6 py-2.5 rounded-xl font-medium text-slate-600 hover:bg-slate-100 transition-colors">Cancelar</button>
                    <button type="button" className="px-6 py-2.5 rounded-xl font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all">
                        Registrar Venda
                    </button>
                </div>
            </form>
        </div>
    );
}
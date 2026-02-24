import { useState } from "react";
import { CalendarPlus } from "lucide-react";

export default function CreateEvent() {
    // Estados do formulário baseados na plataforma de ingressos
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [data, setData] = useState("");
    const [preco, setPreco] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ descricao, categoria, data, preco });
        // Aqui entrará a conexão com o seu Gateway em Java futuramente
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Cabeçalho do Card */}
            <div className="px-8 py-6 border-b border-slate-100 bg-slate-50/50 flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                    <CalendarPlus className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                    <h2 className="text-lg font-bold text-slate-800">Cadastro de Evento</h2>
                    <p className="text-sm text-slate-500">Cadastre novos eventos para a venda de ingressos.</p>
                </div>
            </div>

            {/* Corpo do Formulário */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Nome do Evento</label>
                        <input
                            type="text"
                            placeholder="Ex: Show do Coldplay - Turnê 2026"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-slate-700 placeholder-slate-400"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Categoria</label>
                        <select
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-slate-700 bg-white"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            <option value="" disabled>Selecione a categoria...</option>
                            <option value="Show">Show / Concerto</option>
                            <option value="Teatro">Teatro / Espetáculo</option>
                            <option value="Festival">Festival</option>
                            <option value="Esporte">Evento Esportivo</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Data e Hora</label>
                        <input
                            type="datetime-local"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-slate-700"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Valor Base do Ingresso (R$)</label>
                        <input
                            type="number"
                            placeholder="Ex: 150.00"
                            step="0.01"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-slate-700 placeholder-slate-400"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                        />
                    </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex justify-end gap-3">
                    <button type="button" className="px-6 py-2.5 rounded-xl font-medium text-slate-600 hover:bg-slate-100 transition-colors">
                        Cancelar
                    </button>
                    <button type="submit" className="px-6 py-2.5 rounded-xl font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200 transition-all">
                        Salvar Evento
                    </button>
                </div>
            </form>
        </div>
    );
}
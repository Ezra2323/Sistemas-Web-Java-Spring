import { Users, Search, MoreVertical } from "lucide-react";

export default function ListUsers() {
    // Dados "fakes" apenas para você ver o design funcionando
    const mockUsers = [
        { id: 1, nome: "João Silva", email: "joao.silva@email.com", papel: "Participante", status: "Ativo" },
        { id: 2, nome: "Juliana Costa", email: "juliana.@email.com", papel: "Participante", status: "Ativo" }
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

            {/* Cabeçalho com Barra de Busca */}
            <div className="px-8 py-6 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                        <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-slate-800">Lista de Usuários</h2>
                        <p className="text-sm text-slate-500">Gerencie os inscritos e organizadores.</p>
                    </div>
                </div>

                <div className="flex items-center bg-white px-3 py-2 rounded-lg border border-slate-200 focus-within:border-blue-500 transition-all shadow-sm">
                    <Search className="h-4 w-4 text-slate-400 mr-2" />
                    <input type="text" placeholder="Buscar usuário..." className="border-none outline-none text-sm w-48 text-slate-700 placeholder-slate-400" />
                </div>
            </div>

            {/* Tabela de Dados */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-bold">
                        <th className="px-8 py-4">Nome</th>
                        <th className="px-8 py-4">E-mail</th>
                        <th className="px-8 py-4">Papel</th>
                        <th className="px-8 py-4">Status</th>
                        <th className="px-8 py-4 text-right">Ações</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                    {mockUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-8 py-4 text-sm font-semibold text-slate-800">{user.nome}</td>
                            <td className="px-8 py-4 text-sm text-slate-500">{user.email}</td>
                            <td className="px-8 py-4 text-sm">
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-md font-medium">{user.papel}</span>
                            </td>
                            <td className="px-8 py-4 text-sm">
                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                                        {user.status}
                                    </span>
                            </td>
                            <td className="px-8 py-4 text-right">
                                <button className="text-slate-400 hover:text-blue-600 transition-colors">
                                    <MoreVertical className="h-5 w-5 inline" />
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
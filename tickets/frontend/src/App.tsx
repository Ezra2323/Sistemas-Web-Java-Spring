import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, CalendarPlus, Ticket, Users, PencilLine, Bell, Search, UserCircle } from "lucide-react";

import CreateEvent from "./pages/CreateEvent";
import CreateSale from "./pages/CreateSale";
import ListSales from "./pages/ListSales";
import ListUsers from "./pages/ListUsers";
import UpdateSaleStatus from "./pages/UpdateSaleStatus";

function SidebarLink({ to, icon: Icon, children }: { to: string; icon: any; children: React.ReactNode }) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                isActive
                    ? "bg-blue-600/10 text-blue-600 border-r-4 border-blue-600"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            }`}
        >
            <Icon className={`h-5 w-5 ${isActive ? "text-blue-600" : "text-slate-400"} transition-colors`} />
            {children}
        </Link>
    );
}

function App() {
    return (
        <Router>
            <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">

                {/* === SIDEBAR CLARA E MODERNA === */}
                <aside className="w-72 bg-white border-r border-slate-200 flex flex-col z-20">

                    <div className="h-20 flex items-center px-8 border-b border-slate-100">
                        <div className="bg-blue-600 p-2 rounded-lg mr-3 shadow-sm shadow-blue-200">
                            {/* Trocamos o GraduationCap por Ticket */}
                            <Ticket className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Ticket Admin</h1>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Gestão de Ingressos</p>
                        </div>
                    </div>

                    <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                        <p className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Visão Geral</p>
                        <SidebarLink to="/" icon={LayoutDashboard}>Dashboard</SidebarLink>

                        <p className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 mt-6">Eventos & Vendas</p>
                        <SidebarLink to="/events/new" icon={CalendarPlus}>Novo Evento</SidebarLink>
                        <SidebarLink to="/sales/new" icon={Ticket}>Nova Venda</SidebarLink>
                        <SidebarLink to="/sales/update" icon={PencilLine}>Status de Venda</SidebarLink>

                        <p className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 mt-6">Administração</p>
                        <SidebarLink to="/users" icon={Users}>Usuários</SidebarLink>
                    </nav>
                </aside>

                {/* === ÁREA PRINCIPAL COM TOPBAR === */}
                <main className="flex-1 flex flex-col relative overflow-hidden">

                    {/* Topbar (Cabeçalho Superior) */}
                    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-10">
                        <div className="flex items-center bg-slate-100 px-4 py-2 rounded-lg w-96 border border-slate-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                            <Search className="h-4 w-4 text-slate-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Buscar eventos, vendas ou usuários..."
                                className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder-slate-400"
                            />
                        </div>

                        <div className="flex items-center gap-6">
                            <button className="relative p-2 text-slate-400 hover:text-blue-600 transition-colors">
                                <Bell className="h-5 w-5" />
                                <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                            </button>
                            <div className="flex items-center gap-3 pl-6 border-l border-slate-200 cursor-pointer">
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-slate-900">Coordenador</p>
                                    <p className="text-xs text-slate-500">Admin</p>
                                </div>
                                <UserCircle className="h-10 w-10 text-slate-300" />
                            </div>
                        </div>
                    </header>

                    {/* Conteúdo das Páginas */}
                    <div className="flex-1 overflow-y-auto p-8 bg-slate-50/50">
                        <div className="max-w-6xl mx-auto">
                            <Routes>
                                <Route path="/" element={<ListSales />} />
                                <Route path="/events/new" element={<CreateEvent />} />
                                <Route path="/sales/new" element={<CreateSale />} />
                                <Route path="/sales/update" element={<UpdateSaleStatus />} />
                                <Route path="/users" element={<ListUsers />} />
                            </Routes>
                        </div>
                    </div>
                </main>

            </div>
        </Router>
    );
}

export default App;
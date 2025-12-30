import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getQueries } from "@/lib/api";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, LogOut } from "lucide-react";

// Simple password for admin access (in production, use proper auth)
const ADMIN_PASSWORD = "havenoras2024";

const QueryTable = ({ type }: { type: string }) => {
    const [page, setPage] = useState(1);
    const limit = 10;

    const { data, isLoading, isError } = useQuery({
        queryKey: ['queries', type, page],
        queryFn: () => getQueries(type, page, limit),
    });

    if (isLoading) return <div className="p-4">Loading data...</div>;
    if (isError) return <div className="p-4 text-red-500">Error loading data. Make sure the API is running and tables are setup.</div>;

    const records = data?.data || [];

    if (!records.length) return <div className="p-4 text-muted-foreground">No records found.</div>;

    // Dynamic headers based on type
    const getHeaders = () => {
        if (type === 'travel') return ['ID', 'Name', 'Mobile', 'Package', 'Date'];
        if (type === 'ride') return ['ID', 'Name', 'Mobile', 'Car', 'Pickup', 'Occasion', 'Date'];
        if (type === 'spa') return ['ID', 'Name', 'Mobile', 'Package', 'Location', 'Date'];
        if (type === 'meetup') return ['ID', 'Name', 'Mobile', 'Celebrity', 'Req', 'Date'];
        return [];
    };

    const headers = getHeaders();

    return (
        <div className="space-y-4">
            <div className="border rounded-md bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {headers.map(h => <TableHead key={h}>{h}</TableHead>)}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {records.map((row: any) => (
                            <TableRow key={row.id}>
                                <TableCell className="font-medium">{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.mobile}</TableCell>
                                {type === 'travel' && <TableCell>{row.package_name}</TableCell>}
                                {type === 'ride' && (
                                    <>
                                        <TableCell>{row.car}</TableCell>
                                        <TableCell>{row.pickup_location}</TableCell>
                                        <TableCell>{row.occasion}</TableCell>
                                    </>
                                )}
                                {type === 'spa' && (
                                    <>
                                        <TableCell>{row.preferred_package}</TableCell>
                                        <TableCell>{row.preferred_location}</TableCell>
                                    </>
                                )}
                                {type === 'meetup' && (
                                    <>
                                        <TableCell>{row.celebrity}</TableCell>
                                        <TableCell>{row.requirement}</TableCell>
                                    </>
                                )}
                                <TableCell>{new Date(row.created_at).toLocaleDateString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="flex justify-between items-center px-2">
                <p className="text-sm text-muted-foreground">
                    Page {data?.pagination?.page || 1} of {data?.pagination?.totalPages || 1}
                </p>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        disabled={page <= 1}
                        onClick={() => setPage(p => p - 1)}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        disabled={page >= (data?.pagination?.totalPages || 1)}
                        onClick={() => setPage(p => p + 1)}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
};

const LoginScreen = ({ onLogin }: { onLogin: () => void }) => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            localStorage.setItem("admin_authenticated", "true");
            onLogin();
        } else {
            setError("Incorrect password");
            setPassword("");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="bg-card rounded-2xl shadow-2xl p-8 border border-border/50">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                            <Lock className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-2xl font-serif font-bold text-foreground">Admin Access</h1>
                        <p className="text-sm text-muted-foreground mt-2">Enter password to continue</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Input
                                type="password"
                                placeholder="Enter admin password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError("");
                                }}
                                className="h-12 text-center text-lg"
                                autoFocus
                            />
                            {error && (
                                <p className="text-red-500 text-sm text-center mt-2">{error}</p>
                            )}
                        </div>
                        <Button type="submit" className="w-full h-12 text-base">
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if already authenticated
        const auth = localStorage.getItem("admin_authenticated");
        setIsAuthenticated(auth === "true");
        setIsLoading(false);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("admin_authenticated");
        setIsAuthenticated(false);
    };

    if (isLoading) {
        return <div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>;
    }

    if (!isAuthenticated) {
        return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Simple Admin Header */}
            <header className="border-b bg-card">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <h1 className="text-2xl font-serif font-bold">Havenoras Admin</h1>
                    <div className="flex items-center gap-3">
                        <Button
                            onClick={() => fetch('/api/setup').then(r => r.json()).then(d => alert(JSON.stringify(d)))}
                            variant="outline"
                            size="sm"
                        >
                            Setup Tables
                        </Button>
                        <Button
                            onClick={handleLogout}
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                            <LogOut className="h-4 w-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </div>
            </header>

            <div className="container mx-auto py-8 px-4 flex-1">
                <Tabs defaultValue="travel" className="w-full">
                    <TabsList className="mb-4 flex flex-wrap h-auto">
                        <TabsTrigger value="travel">Travel Queries</TabsTrigger>
                        <TabsTrigger value="ride">Luxury Ride</TabsTrigger>
                        <TabsTrigger value="spa">Russian Spa</TabsTrigger>
                        <TabsTrigger value="meetup">Celebrity Meetup</TabsTrigger>
                    </TabsList>

                    <TabsContent value="travel"><QueryTable type="travel" /></TabsContent>
                    <TabsContent value="ride"><QueryTable type="ride" /></TabsContent>
                    <TabsContent value="spa"><QueryTable type="spa" /></TabsContent>
                    <TabsContent value="meetup"><QueryTable type="meetup" /></TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Admin;

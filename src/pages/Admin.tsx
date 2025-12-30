import { useState } from "react";
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
import Navbar from "@/components/Navbar";

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

const Admin = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <div className="container mx-auto py-10 px-4 flex-1">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-serif font-bold">Admin Panel</h1>
                    <Button onClick={() => fetch('/api/setup').then(r => r.json()).then(d => alert(JSON.stringify(d)))} variant="secondary">
                        Setup Tables (Run Once)
                    </Button>
                </div>

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

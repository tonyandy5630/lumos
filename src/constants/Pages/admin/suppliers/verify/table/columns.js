const verifySupplierTableCols = [
    {
        accessorKey: 'id',
        header: 'ID',
        size: 90,
    },
    {
        accessorKey: 'fullName',
        header: 'Name',
        sortable: false,
        size: 200,
        headerClassName: 'bg-secondary',
    },
    {
        accessorKey: 'sex',
        header: 'Sex',
        size: 90,
        headerClassName: 'bg-secondary',
    },
    {
        accessorKey: 'email',
        header: 'Email',
        size: 200,
        headerClassName: 'bg-secondary',
    },
    {
        accessorKey: 'phone',
        header: 'Phone',
        size: 150,
        headerClassName: 'bg-secondary',
    },
    {
        accessorKey: 'address',
        header: 'Address',
        size: 280,
        headerClassName: 'bg-secondary',
    },
    {
        accessorKey: 'action',
        header: 'Verify',
        size: 40,
    },
]

export default verifySupplierTableCols

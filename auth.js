const ROLES = {
    ADMIN: 'admin',
    USER: 'user',
    SERVICE: 'service'  // Add service role
}

const PERMISSIONS = {
    ADMIN: [
        'create_book',
        'update_book',
        'delete_book',
        'manage_users'
    ],
    USER: [
        'read_book',
        'write_review'
    ],
    SERVICE: [         // Add service permissions
        'read_book',
        'create_book',
        'update_book',
        'bulk_create_books',
        'sync_books'
    ]
}

module.exports = {
    ROLES,
    PERMISSIONS
}
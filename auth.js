const ROLES = {
    ADMIN: 'admin',
    USER: 'user'
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
    ]
}

module.exports = {
    ROLES,
    PERMISSIONS
}
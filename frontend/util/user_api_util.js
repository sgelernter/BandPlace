export const getArtist = (artistId) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${artistId}`
    })
);

export const patchUser = userData => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${userData.id}`,
        data: {user: userData}
    })
)

export const fullUpdateUser = (userId, userData) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${userId}`,
        data: userData,
        contentType: false,
        processData: false
    })
);
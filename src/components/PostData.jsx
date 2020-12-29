async function postData(url, requestOptions) {
    var data = await fetch(url, requestOptions).then(function (response) {
        return response.status;
    })
    return data;
}

export default postData;
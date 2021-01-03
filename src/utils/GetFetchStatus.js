const getFetchStatus = (url, requestOptions) => fetch(url, requestOptions).then(res => res.status);

export default getFetchStatus;
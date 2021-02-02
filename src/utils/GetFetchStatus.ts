function getFetchStatus({ url, requestOptions }: { url: string; requestOptions: RequestInit | undefined; }) {
    let res = fetch(url, requestOptions);
    return res;
}

export default getFetchStatus;
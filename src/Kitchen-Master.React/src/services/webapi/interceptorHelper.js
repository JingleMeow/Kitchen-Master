export function createShowLoaderInterceptor(setLoader) {
    return {
        onRequest: () => setLoader(true),
        onFullfilled: () => setLoader(false),
        onError: () => setLoader(false)
    };
}
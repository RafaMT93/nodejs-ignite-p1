export function buildRoutePath(path) {
    const regex = /:({a-zA-Z}+)/g;
    const pathWithRegex = path.replaceAll(regex, "([a-z0-9\-_]+)");

    const pathRegex = new RegExp(`^${pathWithRegex}(?<query>\\?(.*))?$`)

    return pathRegex;
};
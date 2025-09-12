"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeRegistry = void 0;
class RouteRegistry {
    constructor() {
        this.routes = [];
    }
    registerRoute(method, path, description, category = 'API') {
        this.routes.push({
            method: method.toUpperCase(),
            path,
            description,
            category
        });
    }
    getRoutes() {
        return this.routes;
    }
    getRoutesByCategory() {
        const grouped = this.routes.reduce((acc, route) => {
            if (!acc[route.category]) {
                acc[route.category] = [];
            }
            acc[route.category].push(route);
            return acc;
        }, {});
        return grouped;
    }
    getRouteCount() {
        return this.routes.length;
    }
}
exports.routeRegistry = new RouteRegistry();

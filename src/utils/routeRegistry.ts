interface RouteInfo {
  method: string;
  path: string;
  description: string;
  category: string;
}

class RouteRegistry {
  private routes: RouteInfo[] = [];

  registerRoute(method: string, path: string, description: string, category: string = 'API') {
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
    }, {} as Record<string, RouteInfo[]>);

    return grouped;
  }

  getRouteCount() {
    return this.routes.length;
  }
}

export const routeRegistry = new RouteRegistry();

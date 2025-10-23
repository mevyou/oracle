"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = exports.Cache = void 0;
class Cache {
    constructor() {
        this.store = new Map();
    }
    /**
     * Set a cache entry with TTL (time to live) in seconds
     */
    set(key, data, ttl = 3600) {
        this.store.set(key, {
            data,
            timestamp: Date.now(),
            ttl: ttl * 1000 // Convert to milliseconds
        });
    }
    /**
     * Get a cache entry if it exists and hasn't expired
     */
    get(key) {
        const entry = this.store.get(key);
        if (!entry) {
            return null;
        }
        const now = Date.now();
        const age = now - entry.timestamp;
        if (age > entry.ttl) {
            // Entry has expired
            this.store.delete(key);
            return null;
        }
        return entry.data;
    }
    /**
     * Check if a key exists and is valid
     */
    has(key) {
        return this.get(key) !== null;
    }
    /**
     * Delete a cache entry
     */
    delete(key) {
        return this.store.delete(key);
    }
    /**
     * Clear all cache entries
     */
    clear() {
        this.store.clear();
    }
    /**
     * Clear expired entries
     */
    clearExpired() {
        const now = Date.now();
        const keysToDelete = [];
        this.store.forEach((entry, key) => {
            const age = now - entry.timestamp;
            if (age > entry.ttl) {
                keysToDelete.push(key);
            }
        });
        keysToDelete.forEach(key => this.store.delete(key));
    }
    /**
     * Get cache statistics
     */
    getStats() {
        return {
            size: this.store.size,
            keys: Array.from(this.store.keys())
        };
    }
}
exports.Cache = Cache;
// Create singleton cache instance
exports.cache = new Cache();
// Clear expired entries every 5 minutes
setInterval(() => {
    exports.cache.clearExpired();
    console.log('[Cache] Cleared expired entries. Current size:', exports.cache.getStats().size);
}, 5 * 60 * 1000);

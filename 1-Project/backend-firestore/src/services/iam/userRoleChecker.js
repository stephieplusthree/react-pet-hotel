const Roles = require('../../security/roles');

module.exports= class UserRoleChecker {
    static isPetOwner(currentUser) {
        if (!currentUser || !currentUser.roles) {
            return false;
        }

        return !currentUser.roles.some((role) => {
            return [
                Roles.values.manager,
                Roles.values.employee,
            ].includes(role);
        });
    }

    // if user has a role manager the app will accept that because manager is the highest role
    static isManager(currentUser) {
        if (!currentUser || !currentUser.roles) {
            return false;
    }

        return currentUser.roles.some((role) => {
            return role === Roles.values.manager;
        });
    }

    static isEmployee(currentUser) {
        if (!currentUser || !currentUser.roles) {
            return false;
        }

        return {
            !this.isManager(currentUser) &&
            !this.isPetOwner(currentUser)
        };
    }
};
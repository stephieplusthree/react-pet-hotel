const Roles = require('./roles');
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.manager, 
          roles.employee,
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [roles.manager, roles.employee],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.manager,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [roles.manager],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.owner, roles.auditLogViewer, roles.viewer],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.owner],
      },
      petImport: {
        id: 'petImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.petEditor,
        ],
      },
      petCreate: {
        id: 'petCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.petEditor,
        ],
        allowedStorageFolders: ['pet'],
      },
      petEdit: {
        id: 'petEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.petEditor,
        ],
        allowedStorageFolders: ['pet'],
      },
      petDestroy: {
        id: 'petDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.petEditor,
        ],
        allowedStorageFolders: ['pet'],
      },
      petRead: {
        id: 'petRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.petEditor,
          roles.petViewer,
        ],
      },
      petAutocomplete: {
        id: 'petAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.petEditor,
          roles.petViewer,
          roles.bookingEditor,
          roles.bookingViewer,
        ],
      },

      bookingImport: {
        id: 'bookingImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.bookingEditor,
        ],
      },
      bookingCreate: {
        id: 'bookingCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.bookingEditor,
        ],
        allowedStorageFolders: ['booking'],
      },
      bookingEdit: {
        id: 'bookingEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.bookingEditor,
        ],
        allowedStorageFolders: ['booking'],
      },
      bookingDestroy: {
        id: 'bookingDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.bookingEditor,
        ],
        allowedStorageFolders: ['booking'],
      },
      bookingRead: {
        id: 'bookingRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.bookingEditor,
          roles.bookingViewer,
        ],
      },
      bookingAutocomplete: {
        id: 'bookingAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.bookingEditor,
          roles.bookingViewer,
          roles.petEditor,
          roles.petViewer,
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

module.exports = Permissions;

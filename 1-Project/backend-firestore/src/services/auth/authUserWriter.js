const AuthService = require('../../auth/authService');
const UserRepository = require('../../database/repositories/userRepository');
const assert = require('assert');
const Roles = require('../../security/roles');

class AuthUserWriter {
  static async findOrCreateFromAuth(uid) {
    assert(uid, 'uuid is required');

    const authUser = await AuthService.getUser(uid);
    assert(authUser, 'Authentication User not found');

    const { email } = authUser;
    const databaseUser = await UserRepository.findByEmailWithoutAvatar(
      email,
    );

    if (databaseUser) {
      if (databaseUser.disabled && !authUser.disabled) {
        await AuthService.disable(authUser.uid);
      }

      if (databaseUser.authenticationUid === authUser.uid) {
        return databaseUser;
      }

      return UserRepository.updateAuthenticationUid(
        databaseUser.id,
        authUser.uid,
      );
    }

    // first user is going to be the manager
    const isFirstUser =
      (await UserRepository.count()) === 0;

    const createdDatabaseUser = await UserRepository.createFromAuth(
      {
        firstName:
          authUser.displayName ||
          authUser.email.split('@')[0],
        email: authUser.email,
        authenticationUid: authUser.uid,
        roles: isFirstUser ? [Roles.values.manager] : [],
      },
    );

    return await UserRepository.findById(
      createdDatabaseUser.id,
    );
  }
}

module.exports = AuthUserWriter;

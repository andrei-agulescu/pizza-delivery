import { User } from '../models';
import { UniqueList } from '../utils';

class RegistrationServiceException {
  constructor(public message: string) {}
}

/**
 * This class simulates a Registration Service which manages
 * the users that use our app.
 * 
 * Typical user actions include:
 * - registering for a new accoint
 * - logging in / out
 * - deleting the accound
 * 
 * In a real system, these actions would be executed on the backend
 * and would communicate with a database which stores the users.
 */
export class RegistrationService {

  private static INSTANCE = new RegistrationService();
  private users = new UniqueList<User>();

  private constructor() {}

  static getInstance(): RegistrationService {
    return RegistrationService.INSTANCE;
  }

  registerNewUser(user: User): void {
    this.users.add(user);
  }

  login(user: User): void {
    if (!this.users.contains(user)) {
      throw new RegistrationServiceException('Login failed: user does not exist.');
    }
  }

  logout(user: User): void {
    if (!this.users.contains(user)) {
      throw new RegistrationServiceException('Logout failed: user does not exist.');
    }
  }

  deleteUser(user: User): void {
    this.users.remove(user);
  }
}

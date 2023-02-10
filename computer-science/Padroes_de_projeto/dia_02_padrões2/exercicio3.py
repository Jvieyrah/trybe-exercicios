from abc import ABC, abstractmethod


class SystemAccess(ABC):
    @abstractmethod
    def __init__(self, can_access=False):
        pass

    def set_permission(self, can_access):
        pass
    
    
class SupportSystemAccess(SystemAccess):
    def __init__(self, can_access=False):
        self.name = "Support"
        self.set_permission(can_access)

    def set_permission(self, can_access):
        self.can_access = can_access
 
 
 class FinanceSystemAccess(SystemAccess):
    def __init__(self, can_access=False):
        self.name = "Finance"
        self.set_permission(can_access)

    def set_permission(self, can_access):
        self.can_access = can_access


class SalesSystemAccess(SystemAccess):
    def __init__(self, can_access=False):
        self.name = "Sales"
        self.set_permission(can_access)

    def set_permission(self, can_access):
        self.can_access = can_access



class Account(ABC):
    def __init__(self, username):
        self.username = username
        self.permissions = []
        self.create_account()

    @abstractmethod
    def create_account():
        pass

    def show_permissions(self):
        permissions_names = [
            permission.name for permission in self.permissions
        ]
        return permissions_names

    def add_permissions(self, permission):
        self.permissions.append(permission)


class Account(ABC):
    def __init__(self, username):
        self.username = username
        self.permissions = []
        self.create_account()

    @abstractmethod
    def create_account():
        pass

    def show_permissions(self):
        permissions_names = [
            permission.name for permission in self.permissions
        ]
        return permissions_names

    def add_permissions(self, permission):
        self.permissions.append(permission)

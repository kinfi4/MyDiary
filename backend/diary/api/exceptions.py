class ObjectNotExistOrNoPermission(Exception):
    def __init__(self, message='This object does not exist, or does not belong to user'):
        super().__init__(message)

function (user, context, callback) {

  if (context.clientName === 'TheAppToCheckAccessTo') {
    const date = new Date();
    const d = date.getDay();

    if (d === 0 || d === 6) {
      return callback(new UnauthorizedError('This app is available during the week'));
    }
  }

  callback(null, user, context);
}
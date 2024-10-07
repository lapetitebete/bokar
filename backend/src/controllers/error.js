const get404 = (req, res, next) => {
  return res.status(404)
            .json({
              'message': 'something went wrong'
            });
};

export { get404 };

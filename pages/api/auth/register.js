export default (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end() //Method Not Allowed
    return
  }
  console.log(req.body)
  res.end()
}

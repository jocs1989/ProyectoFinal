export async function agregarOrden(req, res) {
  try {
    const idArticulo = req.body.idArticulo;
    const cantidad = req.body.cantidad;
    const valores = await carrito.setNewCar(idArticulo, cantidad);
    res.status(200).json(valores);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.toString() });
  }
}
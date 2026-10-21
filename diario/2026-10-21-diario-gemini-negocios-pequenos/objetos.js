// Objetos 3D del post.
export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, edgeBox, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(1.5, 1.5, 1.5, 6, 0.16), M.pearl, [-0.7, 0.75, 0], [0, 0.3, 0], g);
    edgeBox(-0.7, 0.95, 0, 2.5, 2.3, 2.5, 0.045, M.blue, g);
    add(new THREE.SphereGeometry(0.7, 64, 48), M.silver, [1.9, 0.7, 0.4], [0, 0, 0], g);
  },
  panel({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.4;
    [[M.pearl, 0.8], [M.white, 1.3], [M.blue, 1.9]].forEach(([m, h], i) => add(new RoundedBoxGeometry(1.1, h, 1.1, 6, 0.12), m, [-1.4 + i * 1.4, h / 2, 0], [0, 0, 0], g));
  },
  llegada({ THREE, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.3;
    [[M.graphite, 0.6], [M.slate, 1.1], [M.blue, 1.7]].forEach(([m, h], i) => add(new THREE.CylinderGeometry(0.62, 0.62, h, 96), m, [-1.7 + i * 1.7, h / 2, 0], [0, 0, 0], g));
  },
  conexion({ THREE, RoundedBoxGeometry, cam, look, M, add, cyl, V, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(3.8, 0.2, 2.0, 6, 0.08), M.pearl, [0, 0.1, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.75, 64, 48), M.white, [-1.3, 0.95, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.75, 64, 48), M.graphite, [1.3, 0.95, 0], [0, 0, 0], g);
    cyl(V(-0.6, 0.95, 0), V(0.6, 0.95, 0), 0.18, M.blue, g);
  },
};

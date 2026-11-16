export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new RoundedBoxGeometry(3.0, 1.9, 0.12, 6, 0.06), M.pearl, [-0.4, 1.35, 0], [-0.25, 0, 0.12], g);
    add(new THREE.SphereGeometry(0.8, 96, 64), M.blue, [2.0, 0.8, 0.6], [0, 0, 0], g);
    add(new RoundedBoxGeometry(0.7, 0.45, 0.14, 4, 0.05), M.silver, [-1.3, 1.9, 0.1], [-0.25, 0, 0.12], g);
  },
  tarjeta({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(3.4, 0.6, 2.0, 6, 0.12), M.silver, [0, 0.3, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(2.6, 1.6, 0.1, 6, 0.06), M.pearl, [0, 1.35, -0.2], [0, 0, 0], g);
    add(new RoundedBoxGeometry(0.6, 0.4, 0.14, 4, 0.05), M.blue, [-0.7, 1.55, -0.12], [0, 0, 0], g);
  },
  acceso({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.8, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new THREE.CylinderGeometry(1.5, 1.5, 0.3, 96), M.graphite, [0, 0.15, 0], [0, 0, 0], g);
    add(new THREE.TorusGeometry(0.9, 0.12, 32, 96), M.blue, [0, 0.46, 0], [Math.PI / 2, 0, 0], g);
    add(new RoundedBoxGeometry(0.8, 0.8, 0.8, 6, 0.12), M.silver, [2.3, 0.4, 0.4], [0, 0.4, 0], g);
  },
  paquete({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(1.8, 1.4, 1.8, 6, 0.14), M.pearl, [-0.6, 0.7, 0], [0, 0.2, 0], g);
    add(new THREE.SphereGeometry(0.55, 64, 48), M.blue, [-0.6, 1.95, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.0, 1.0, 1.0, 6, 0.12), M.silver, [1.6, 0.5, 0.4], [0, 0.5, 0], g);
  },
};

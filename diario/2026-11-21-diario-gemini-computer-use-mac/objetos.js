export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(2.8, 1.8, 0.18, 6, 0.1), M.pearl, [-0.4, 1.5, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.2, 0.2, 0.9, 6, 0.08), M.silver, [-0.4, 0.1, 0.2], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.55, 64, 48), M.blue, [1.7, 0.55, 0.5], [0, 0, 0], g);
  },
  ventana({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(2.6, 1.7, 0.16, 6, 0.1), M.white, [0.5, 1.0, -0.5], [0, 0, 0], g);
    add(new RoundedBoxGeometry(2.6, 1.7, 0.16, 6, 0.1), M.pearl, [-0.4, 0.9, 0.4], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.5, 64, 48), M.blue, [-0.4, 0.5, 1.2], [0, 0, 0], g);
  },
  acceso({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(3.2, 0.24, 2.4, 6, 0.1), M.silver, [0, 0.12, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.0, 1.0, 1.0, 6, 0.14), M.blue, [0, 0.74, 0], [0, 0.3, 0], g);
    add(new THREE.CylinderGeometry(0.22, 0.22, 1.4, 48), M.pearl, [-1.3, 0.94, 0.7], [0, 0, 0], g);
  },
  control({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.7, 0);
    const g = Group(); g.rotation.y = -0.35;
    [M.pearl, M.white, M.silver].forEach((m, i) => add(new RoundedBoxGeometry(1.0, 1.0, 1.0, 6, 0.14), m, [-1.95 + i * 1.3, 0.5, 0], [0, 0, 0], g));
    add(new RoundedBoxGeometry(1.0, 1.0, 1.0, 6, 0.14), M.blue, [1.95, 0.9, 0], [0, 0.3, 0], g);
  },
};

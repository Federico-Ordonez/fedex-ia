export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new THREE.SphereGeometry(0.95, 96, 64), M.pearl, [-0.6, 1.0, 0], [0, 0, 0], g);
    add(new THREE.TorusGeometry(1.45, 0.07, 32, 128), M.blue, [-0.6, 1.0, 0], [Math.PI / 2.4, 0.3, 0], g);
    add(new RoundedBoxGeometry(1.1, 1.1, 1.1, 6, 0.14), M.silver, [1.85, 0.55, 0.3], [0, 0.4, 0], g);
  },
  memoria({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.4;
    [M.pearl, M.white, M.blue, M.pearl, M.silver].forEach((m, i) => add(new RoundedBoxGeometry(2.8, 0.28, 1.9, 6, 0.1), m, [(i % 2 ? 0.25 : -0.25), 0.14 + i * 0.34, 0], [0, (i - 2) * 0.08, 0], g));
  },
  acceso({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(0.7, 2.4, 0.7, 6, 0.12), M.graphite, [-1.3, 1.2, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(0.7, 2.4, 0.7, 6, 0.12), M.graphite, [1.3, 1.2, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(3.6, 0.55, 0.9, 6, 0.12), M.blue, [0, 2.65, 0], [0, 0, 0], g);
  },
  conexion({ THREE, RoundedBoxGeometry, cam, look, M, add, cyl, V, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(1.3, 1.3, 1.3, 6, 0.16), M.blue, [-1.6, 0.65, 0], [0, 0.3, 0], g);
    [[1.2, 0.5, 1.1], [1.9, 0.5, -0.5], [0.9, 0.5, -1.7]].forEach(p => {
      add(new THREE.SphereGeometry(0.5, 64, 48), M.pearl, p, [0, 0, 0], g);
      cyl(V(-1.6, 0.5, 0), V(p[0], 0.5, p[2]), 0.05, M.silver, g);
    });
  },
};

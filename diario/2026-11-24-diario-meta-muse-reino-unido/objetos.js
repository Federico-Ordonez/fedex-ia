export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new THREE.SphereGeometry(0.95, 96, 64), M.pearl, [-0.6, 0.95, 0], [0, 0, 0], g);
    add(new THREE.TorusGeometry(1.45, 0.07, 32, 128), M.blue, [-0.6, 0.95, 0], [1.2, 0.3, 0.2], g);
    add(new RoundedBoxGeometry(1.1, 1.1, 1.1, 6, 0.14), M.silver, [1.9, 0.55, 0.3], [0, 0.4, 0], g);
  },
  tareas({ THREE, RoundedBoxGeometry, cam, look, M, add, cyl, V, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.6, 0);
    const g = Group(); g.rotation.y = -0.35;
    [M.pearl, M.white, M.blue].forEach((m, i) => add(new RoundedBoxGeometry(1.0, 1.0, 1.0, 6, 0.14), m, [-1.8 + i * 1.8, 0.5, 0], [0, 0, 0], g));
    cyl(V(-1.3, 0.5, 0), V(-0.5, 0.5, 0), 0.07, M.silver, g);
    cyl(V(0.5, 0.5, 0), V(1.3, 0.5, 0), 0.07, M.silver, g);
  },
  mapa({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.2, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.5;
    add(new RoundedBoxGeometry(3.4, 0.24, 3.4, 6, 0.1), M.silver, [0, 0.12, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.6, 0.6, 1.4, 96), M.graphite, [-0.5, 0.94, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.5, 0.5, 0.2, 96), M.blue, [0.8, 0.34, 0.3], [0, 0, 0], g);
  },
  permiso({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(3.2, 0.24, 3.2, 6, 0.1), M.white, [0, 0.12, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.8, 96, 64), M.pearl, [0, 1.15, 0], [0, 0, 0], g);
    add(new THREE.TorusGeometry(1.3, 0.08, 32, 128), M.blue, [0, 1.15, 0], [Math.PI / 2, 0, 0], g);
  },
};

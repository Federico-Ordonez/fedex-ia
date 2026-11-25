export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.6, 11); look(0, 1.3, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(3.2, 2.2, 0.14, 6, 0.07), M.pearl, [-0.4, 1.4, -0.2], [0, 0, 0], g);
    add(new RoundedBoxGeometry(3.2, 0.3, 0.16, 6, 0.07), M.graphite, [-0.4, 2.35, -0.2], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.0, 1.0, 1.0, 6, 0.14), M.blue, [1.7, 0.5, 0.9], [0, 0.4, 0], g);
    add(new THREE.SphereGeometry(0.5, 64, 48), M.silver, [-1.9, 0.5, 1.0], [0, 0, 0], g);
  },
  ventana({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.6, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new RoundedBoxGeometry(3.4, 0.2, 2.2, 6, 0.08), M.silver, [0, 0.1, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(3.0, 2.0, 0.14, 6, 0.07), M.white, [0, 1.3, -0.3], [-0.12, 0, 0], g);
    add(new RoundedBoxGeometry(0.8, 0.8, 0.8, 6, 0.14), M.blue, [0, 1.3, 0.2], [0, 0.5, 0], g);
  },
  planos({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.8, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(1.5, 1.0, 1.5, 6, 0.12), M.graphite, [-2.0, 0.5, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.5, 1.0, 1.5, 6, 0.12), M.blue, [0, 0.5, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.75, 0.75, 1.0, 64), M.silver, [2.0, 0.5, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(5.6, 0.1, 2.2, 6, 0.04), M.pearl, [0, 0.05, 0], [0, 0, 0], g);
  },
  escritorio({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(4.0, 0.24, 2.6, 6, 0.1), M.pearl, [0, 0.12, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.1, 1.1, 1.1, 6, 0.14), M.white, [-1.1, 0.79, 0], [0, 0.3, 0], g);
    add(new THREE.SphereGeometry(0.6, 64, 48), M.blue, [0.5, 0.84, 0.2], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.4, 0.4, 1.4, 48), M.silver, [1.5, 0.94, -0.3], [0, 0, 0], g);
  },
};

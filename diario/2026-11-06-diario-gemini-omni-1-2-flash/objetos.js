export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(3.0, 1.9, 0.18, 6, 0.08), M.graphite, [-0.4, 1.05, -0.4], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.8, 96, 64), M.blue, [-0.4, 0.8, 0.6], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.0, 1.0, 1.0, 6, 0.14), M.silver, [1.9, 0.5, 0.4], [0, 0.4, 0], g);
  },
  clips({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.6, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new RoundedBoxGeometry(1.0, 0.7, 0.9, 6, 0.12), M.pearl, [-2.4, 0.35, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.0, 0.7, 0.9, 6, 0.12), M.white, [-1.2, 0.35, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(2.6, 0.7, 0.9, 6, 0.12), M.blue, [0.9, 0.35, 0], [0, 0, 0], g);
  },
  acceso({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.5;
    add(new RoundedBoxGeometry(1.2, 0.6, 1.4, 6, 0.1), M.graphite, [-1.3, 0.3, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.2, 1.2, 1.4, 6, 0.1), M.silver, [0, 0.6, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.2, 1.8, 1.4, 6, 0.1), M.blue, [1.3, 0.9, 0], [0, 0, 0], g);
  },
  ajusta({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.2, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.5;
    add(new RoundedBoxGeometry(3.4, 0.24, 2.2, 6, 0.1), M.pearl, [0, 0.12, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.6, 0.6, 1.3, 96), M.white, [-0.8, 0.89, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(0.9, 0.9, 0.9, 6, 0.12), M.blue, [0.9, 0.69, 0.1], [0, 0.4, 0], g);
  },
};

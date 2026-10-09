export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(1.9, 1.9, 1.9, 6, 0.2), M.graphite, [-0.6, 0.95, 0], [0, 0.3, 0], g);
    add(new THREE.SphereGeometry(0.7, 96, 64), M.blue, [1.5, 0.7, 0.5], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.45, 64, 48), M.pearl, [-2.3, 0.45, 0.8], [0, 0, 0], g);
  },
  objetivo({ THREE, RoundedBoxGeometry, cam, look, M, add, cyl, V, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.8, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new THREE.SphereGeometry(0.8, 96, 64), M.pearl, [-2.2, 0.8, 0], [0, 0, 0], g);
    cyl(V(-1.3, 0.5, 0), V(0.9, 0.5, 0), 0.09, M.silver, g);
    add(new THREE.SphereGeometry(0.18, 32, 24), M.white, [-0.2, 0.5, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.3, 1.3, 1.3, 6, 0.16), M.blue, [1.9, 0.65, 0], [0, 0.4, 0], g);
  },
  vista({ THREE, cam, look, M, add, edgeBox, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.4;
    edgeBox(0, 1.2, 0, 2.4, 2.4, 2.4, 0.06, M.blue, g);
    add(new THREE.SphereGeometry(0.7, 96, 64), M.white, [0, 0.7, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.9, 0.9, 0.12, 64), M.silver, [0, 0.06, 0], [0, 0, 0], g);
  },
  bandeja({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.2, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.45;
    add(new RoundedBoxGeometry(4.0, 0.2, 2.4, 6, 0.08), M.silver, [0, 0.1, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(0.95, 0.95, 0.95, 6, 0.12), M.pearl, [-1.2, 0.68, 0.1], [0, 0.3, 0], g);
    add(new RoundedBoxGeometry(0.95, 0.95, 0.95, 6, 0.12), M.white, [0.0, 0.68, -0.2], [0, -0.2, 0], g);
    add(new RoundedBoxGeometry(0.95, 0.95, 0.95, 6, 0.12), M.blue, [1.2, 0.68, 0.1], [0, 0.2, 0], g);
  },
};

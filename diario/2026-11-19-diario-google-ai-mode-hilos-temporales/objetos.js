export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new THREE.SphereGeometry(0.95, 96, 64), M.pearl, [-0.5, 0.95, 0], [0, 0, 0], g);
    add(new THREE.TorusGeometry(1.5, 0.07, 32, 128), M.blue, [-0.5, 0.95, 0], [Math.PI / 2.3, 0.2, 0], g);
    add(new RoundedBoxGeometry(1.1, 1.1, 1.1, 6, 0.14), M.silver, [2.0, 0.55, 0.3], [0, 0.4, 0], g);
  },
  separado({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.8, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(1.5, 1.5, 1.5, 6, 0.16), M.pearl, [-1.7, 0.75, 0], [0, 0.3, 0], g);
    add(new THREE.SphereGeometry(0.8, 96, 64), M.blue, [1.7, 0.8, 0], [0, 0, 0], g);
  },
  global({ THREE, cam, look, M, add, Group }) {
    cam.position.set(0, 2.6, 11); look(0, 1.3, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new THREE.SphereGeometry(1.2, 96, 64), M.graphite, [0, 1.3, 0], [0, 0, 0], g);
    add(new THREE.TorusGeometry(1.9, 0.08, 32, 128), M.blue, [0, 1.3, 0], [Math.PI / 2.4, 0.3, 0], g);
  },
  regalo({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(2.0, 1.6, 2.0, 6, 0.14), M.pearl, [0, 0.8, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(0.34, 1.64, 2.04, 4, 0.05), M.blue, [0, 0.8, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(2.04, 1.64, 0.34, 4, 0.05), M.blue, [0, 0.8, 0], [0, 0, 0], g);
  },
};

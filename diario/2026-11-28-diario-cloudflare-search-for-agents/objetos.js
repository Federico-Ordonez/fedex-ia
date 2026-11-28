export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, edgeBox, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new THREE.SphereGeometry(0.95, 96, 64), M.pearl, [-0.7, 0.95, 0], [0, 0, 0], g);
    edgeBox(-0.7, 1.15, 0, 2.5, 2.3, 2.5, 0.045, M.blue, g);
    add(new THREE.CylinderGeometry(0.6, 0.6, 1.3, 64), M.silver, [1.8, 0.65, 0.3], [0, 0, 0], g);
  },
  interruptor({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.8, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new RoundedBoxGeometry(3.6, 0.3, 2.0, 6, 0.1), M.silver, [0, 0.15, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(2.8, 0.9, 1.4, 6, 0.4), M.pearl, [0, 0.75, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.5, 64, 48), M.blue, [0.8, 1.25, 0], [0, 0, 0], g);
  },
  planes({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.4;
    [0.7, 1.2, 1.7, 2.3].forEach((h, i) => add(new RoundedBoxGeometry(0.95, h, 0.95, 6, 0.1), i === 3 ? M.blue : M.silver, [-1.65 + i * 1.1, h / 2, 0], [0, 0, 0], g));
  },
  puerta({ THREE, RoundedBoxGeometry, cam, look, M, add, cyl, V, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(0.7, 2.4, 0.7, 6, 0.1), M.graphite, [-1.4, 1.2, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(0.7, 2.4, 0.7, 6, 0.1), M.graphite, [1.4, 1.2, 0], [0, 0, 0], g);
    cyl(V(-1.4, 1.5, 0), V(1.4, 1.5, 0), 0.14, M.blue, g);
    add(new THREE.SphereGeometry(0.55, 64, 48), M.silver, [0, 0.55, 1.1], [0, 0, 0], g);
  },
};

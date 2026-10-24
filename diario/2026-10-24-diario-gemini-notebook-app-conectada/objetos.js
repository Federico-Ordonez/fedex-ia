// Objetos 3D del post.
export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.3, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new RoundedBoxGeometry(2.0, 2.6, 0.42, 6, 0.12), M.pearl, [-0.6, 1.3, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(0.16, 2.4, 0.46, 4, 0.06), M.graphite, [-1.45, 1.3, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.8, 96, 64), M.blue, [1.7, 0.8, 0.5], [0, 0, 0], g);
  },
  pila({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.2, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.45;
    [M.pearl, M.white, M.silver, M.blue].forEach((m, i) => add(new RoundedBoxGeometry(3.0, 0.4, 2.2, 6, 0.1), m, [0, 0.2 + i * 0.46, 0], [0, i * 0.08, 0], g));
  },
  interruptor({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.8, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(4.0, 1.2, 1.4, 8, 0.55), M.graphite, [0, 0.6, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.62, 96, 64), M.blue, [1.2, 0.75, 0.1], [0, 0, 0], g);
  },
  puente({ THREE, RoundedBoxGeometry, cam, look, M, add, cyl, V, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(1.5, 1.5, 1.5, 6, 0.16), M.pearl, [-1.8, 0.75, 0], [0, 0.3, 0], g);
    add(new RoundedBoxGeometry(1.5, 1.5, 1.5, 6, 0.16), M.white, [1.8, 0.75, 0], [0, -0.3, 0], g);
    cyl(V(-1.1, 0.75, 0), V(1.1, 0.75, 0), 0.2, M.blue, g);
  },
};

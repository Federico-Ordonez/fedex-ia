// Objetos 3D del post. Cada función recibe ctx = { THREE, RoundedBoxGeometry, scene, cam, look, M, add, cyl, V, rrect, edgeBox, Group }.
export default {
  portada({ THREE, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new THREE.TorusGeometry(1.15, 0.2, 48, 128), M.blue, [-0.6, 1.35, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.75, 96, 64), M.pearl, [1.55, 0.75, 0.5], [0, 0, 0], g);
  },
  pantalla({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.8, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(2.4, 0.3, 1.0, 6, 0.1), M.silver, [0, 0.15, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(3.4, 1.8, 0.16, 6, 0.08), M.pearl, [0, 1.25, -0.2], [-0.12, 0, 0], g);
    add(new THREE.SphereGeometry(0.42, 96, 64), M.blue, [1.0, 0.72, 0.75], [0, 0, 0], g);
  },
  global({ THREE, cam, look, M, add }) {
    cam.position.set(0, 2.6, 11); look(0, 1.2, 0);
    add(new THREE.SphereGeometry(1.0, 96, 64), M.silver, [0, 1.2, 0]);
    add(new THREE.TorusGeometry(1.6, 0.09, 32, 160), M.blue, [0, 1.2, 0], [1.25, 0.3, 0.2]);
  },
  agenda({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.8, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(1.1, 1.1, 1.1, 6, 0.14), M.white, [1.3, 0.55, 0.3], [0, 0.3, 0], g);
    add(new RoundedBoxGeometry(1.7, 2.2, 0.08, 6, 0.1), M.pearl, [-0.9, 1.12, -0.3], [0, 0.2, -0.1], g);
    add(new RoundedBoxGeometry(1.7, 2.2, 0.08, 6, 0.1), M.blue, [-0.3, 1.1, 0.2], [0, 0.1, 0.12], g);
  },
};

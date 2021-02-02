package dk.sdu.mmmi.cbse.gamestates;

import java.util.ArrayList;

import com.badlogic.gdx.graphics.glutils.ShapeRenderer;
import dk.sdu.mmmi.cbse.entities.Player;
import dk.sdu.mmmi.cbse.entities.Enemy;
import dk.sdu.mmmi.cbse.entities.Rocket;
import dk.sdu.mmmi.cbse.managers.GameKeys;
import dk.sdu.mmmi.cbse.managers.GameStateManager;

public class PlayState extends GameState {

	private ShapeRenderer sr;

	private Player player;
	private Enemy enemy;
	private ArrayList<Rocket> playerRockets;
	private ArrayList<Rocket> enemyRockets;

	public PlayState(GameStateManager gsm) {
		super(gsm);
	}

	public void init() {
		playerRockets = new ArrayList<Rocket>();
		enemyRockets = new ArrayList<Rocket>();

		sr = new ShapeRenderer();

		player = new Player(playerRockets);

		enemy = new Enemy(enemyRockets);

	}

	public void update(float dt) {

		handleInput();

		player.update(dt);
		enemy.update(dt);

		for (int i = 0; i < enemyRockets.size(); i++) {
			enemyRockets.get(i).update(dt);
		}
		for (int i = 0; i < playerRockets.size(); i++) {
			playerRockets.get(i).update(dt);
		}

	}

	public void draw() {
		player.draw(sr);
		enemy.draw(sr);

		for (int i = 0; i < enemyRockets.size(); i++) {
			enemyRockets.get(i).draw(sr);
		}
		for (int i = 0; i < playerRockets.size(); i++) {
			playerRockets.get(i).draw(sr);
		}
	}

	public void handleInput() {
		player.setLeft(GameKeys.isDown(GameKeys.LEFT));
		player.setRight(GameKeys.isDown(GameKeys.RIGHT));
		player.setUp(GameKeys.isDown(GameKeys.UP));
		player.setSpace(GameKeys.isDown(GameKeys.SPACE));

		if (GameKeys.isDown(GameKeys.SPACE)) {
			player.shoot();
		}
	}

	public void dispose() {
	}

}

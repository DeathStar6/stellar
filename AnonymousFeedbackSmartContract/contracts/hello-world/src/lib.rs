#![no_std]

use soroban_sdk::{contract, contractimpl, contracttype, Env, Symbol, String, Vec, Map};

#[contracttype]
#[derive(Clone)]
pub struct Poll {
    pub id: u64,
    pub question: String,
    pub options: Vec<String>,
}

const POLL_COUNT: Symbol = Symbol::short("POLL_CNT");

#[contract]
pub struct PollingContract;

#[contractimpl]
impl PollingContract {

    // Create Poll
    pub fn create_poll(env: Env, question: String, options: Vec<String>) -> u64 {
        let mut count: u64 = env.storage().instance().get(&POLL_COUNT).unwrap_or(0);
        count += 1;

        let poll = Poll {
            id: count,
            question,
            options,
        };

        env.storage().instance().set(&count, &poll);
        env.storage().instance().set(&POLL_COUNT, &count);

        count
    }

    // Vote
    pub fn vote(env: Env, poll_id: u64, option_index: u32) {
        let key = (poll_id, Symbol::short("VOTES"));

        let mut votes: Map<u32, u32> =
            env.storage().instance().get(&key).unwrap_or(Map::new(&env));

        let current = votes.get(option_index).unwrap_or(0);
        votes.set(option_index, current + 1);

        env.storage().instance().set(&key, &votes);
    }

    // Get Results
    pub fn get_results(env: Env, poll_id: u64) -> Map<u32, u32> {
        let key = (poll_id, Symbol::short("VOTES"));
        env.storage().instance().get(&key).unwrap_or(Map::new(&env))
    }
}
A = 'A'
B = 'B'
C = 'C'
D = 'D'

state = {}
model = {A: None, B: None, C: None, D: None}
action = None

RULE_ACTION = {
    1: 'Suck',
    2: 'Right',
    3: 'Down',
    4: 'Left',
    5: 'Up',
    6: 'NoOp'
}

rules = {
    (A, 'Dirty'): 1,
    (B, 'Dirty'): 1,
    (C, 'Dirty'): 1,
    (D, 'Dirty'): 1,
    (A, 'Clean'): 2,
    (B, 'Clean'): 3,
    (C, 'Clean'): 4,
    (D, 'Clean'): 5,
    (A,B,C,D, 'Clean'):6
}

Environment = {
    A: 'Dirty',
    B: 'Dirty',
    C: 'Dirty',
    D: 'Dirty', 
    'Current': A
}

def INTERPRET_INPUT(input): # No interpretation
    return input

def RULE_MATCH(state, rules):
    rule = rules.get(tuple(state))
    return rule

def UPDATE_STATE(state, action, percept):
    (location, status) = percept
    state = percept
    if model[A] == model[B] == model[C] == model[D] == 'Clean':
        state = (A,B,C,D,'Clean')
    model[location] = status
    return state

def REFLEX_AGENT_WITH_STATE(percept):
    global state, action
    state = UPDATE_STATE(state,action,percept)
    rule = RULE_MATCH(state,rules)
    action = RULE_ACTION[rule]
    return action

def Sensors(): #Sense environment
    location = Environment['Current']
    return  (location, Environment[location])

def Actuators(action): 
    location = Environment['Current']
    if action == 'Suck':
        Environment[location] = 'Clean'
    elif action == 'Right' and location == A:
        Environment['Current'] = B
    elif action == 'Down' and location == B:
        Environment['Current'] = C
    elif action == 'Left' and location == C:
        Environment['Current'] = D
    elif action == 'Up' and location == D:
        Environment['Current'] = A

    


def run(n):
    print('Current                     New')
    print('Location    Status  Action  Location    Status')
    for i in range(1,n):
        (location, status) = Sensors()
        print("{:12s}{:8s}".format(location,status), end='')
        action = REFLEX_AGENT_WITH_STATE(Sensors())
        Actuators(action)
        (location, status) = Sensors()
        print("{:12s}{:8s}{:8s}".format(action,location,status))



run(20)